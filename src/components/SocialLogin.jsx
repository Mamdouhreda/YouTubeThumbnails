"use client";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

// WordPress site URL
const WORDPRESS_SITE_URL = "https://youtubethumb.wpenginepowered.com";

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
      user {
        id
        name
        email
      }
    }
  }
`;

export default function SocialLogin({ onLoginSuccess }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setLoginError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.username || !formState.password) {
      setLoginError("Username and password are required");
      return;
    }

    setIsLoggingIn(true);

    try {
      const { data } = await loginUser({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });

      if (data.login.authToken) {
        // Save auth token to localStorage
        localStorage.setItem("authToken", data.login.authToken);

        // Call the success callback
        if (onLoginSuccess) {
          onLoginSuccess({
            isLoggedIn: true,
            user: data.login.user,
          });
        }
      }
    } catch (error) {
      setLoginError(
        error.message || "Failed to login. Please check your credentials."
      );
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // In a real implementation, you would redirect to WordPress OAuth endpoints
    // or use a social login plugin's endpoints
    window.open(
      `${WORDPRESS_SITE_URL}/wp-login.php?action=wordpress_social_login&provider=${provider}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Login to Comment</h3>

      {loginError && (
        <div className="bg-red-50 text-red-800 rounded-lg p-4 mb-6">
          {loginError}
        </div>
      )}

      <div className="space-y-4 mb-6">
        <button
          type="button"
          onClick={() => handleSocialLogin("facebook")}
          className="w-full flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 px-4 rounded-lg hover:bg-[#2d4373] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          Continue with Facebook
        </button>

        <button
          type="button"
          onClick={() => handleSocialLogin("google")}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
            />
            <path
              fill="#34A853"
              d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
            />
            <path
              fill="#4A90E2"
              d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
            />
            <path
              fill="#FBBC05"
              d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
            />
          </svg>
          Continue with Google
        </button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Or login with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-1">
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          disabled={isLoggingIn}
          className={`w-full py-2 bg-blue-600 text-white rounded-lg font-medium ${
            isLoggingIn ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <a
          href={`${WORDPRESS_SITE_URL}/wp-login.php?action=register`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Don't have an account? Register
        </a>
      </div>
    </div>
  );
}
