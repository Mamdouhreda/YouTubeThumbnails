"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";

const GET_USER = gql`
  query GetCurrentUser {
    viewer {
      id
      name
      email
      avatar {
        url
      }
    }
  }
`;

// Create authentication context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    user: null,
    loading: true,
  });

  const client = useApolloClient();

  // Check for token and validate on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setAuthState({ isLoggedIn: false, user: null, loading: false });
        return;
      }

      try {
        // Add auth token to Apollo Client headers
        client.setLink(
          client.link.concat({
            request: (operation) => {
              operation.setContext({
                headers: {
                  authorization: token ? `Bearer ${token}` : "",
                },
              });
            },
          })
        );

        // Try to fetch current user
        const { data } = await client.query({
          query: GET_USER,
          fetchPolicy: "network-only",
        });

        if (data.viewer) {
          setAuthState({
            isLoggedIn: true,
            user: data.viewer,
            loading: false,
          });
        } else {
          // No viewer means token is invalid
          localStorage.removeItem("authToken");
          setAuthState({ isLoggedIn: false, user: null, loading: false });
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("authToken");
        setAuthState({ isLoggedIn: false, user: null, loading: false });
      }
    };

    checkAuth();
  }, [client]);

  // Login function
  const login = async (userData) => {
    setAuthState({
      isLoggedIn: true,
      user: userData.user,
      loading: false,
    });

    // Add auth token to Apollo Client headers
    const token = localStorage.getItem("authToken");
    if (token) {
      client.setLink(
        client.link.concat({
          request: (operation) => {
            operation.setContext({
              headers: {
                authorization: `Bearer ${token}`,
              },
            });
          },
        })
      );
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthState({ isLoggedIn: false, user: null, loading: false });

    // Clear Apollo cache on logout
    client.clearStore();
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
