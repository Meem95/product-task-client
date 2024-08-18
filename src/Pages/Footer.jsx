import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-gray-100 text-black">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center rounded-full bg-violet-400">
              <img className="h-20 w-20" src="https://i.ibb.co/tHR5Xps/logo.webp" alt="" />
              </div>
             
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-black">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-black">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-black">Spoonsor</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Doordash
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Grubhub
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-black">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.396 2.176 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.176 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.020 6.469 0.089 1.563 0.073 2.412 0.333 2.975 0.553 0.752 0.291 1.285 0.641 1.854 1.213 0.573 0.569 0.927 1.102 1.213 1.854 0.22 0.563 0.48 1.412 0.553 2.975 0.068 1.688 0.089 2.199 0.089 6.469s-0.020 4.781-0.089 6.469c-0.073 1.563-0.333 2.412-0.553 2.975-0.291 0.752-0.641 1.285-1.213 1.854-0.569 0.573-1.102 0.927-1.854 1.213-0.563 0.22-1.412 0.48-2.975 0.553-1.688 0.068-2.199 0.089-6.469 0.089s-4.781-0.020-6.469-0.089c-1.563-0.073-2.412-0.333-2.975-0.553-0.752-0.291-1.285-0.641-1.854-1.213-0.573-0.569-0.927-1.102-1.213-1.854-0.22-0.563-0.48-1.412-0.553-2.975-0.068-1.688-0.089-2.199-0.089-6.469s0.020-4.781 0.089-6.469c0.073-1.563 0.333-2.412 0.553-2.975 0.291-0.752 0.641-1.285 1.213-1.854 0.569-0.573 1.102-0.927 1.854-1.213 0.563-0.22 1.412-0.48 2.975-0.553 1.688-0.068 2.199-0.089 6.469-0.089zM16 7.787c-4.529 0-8.213 3.688-8.213 8.213 0 4.529 3.688 8.213 8.213 8.213 4.529 0 8.213-3.688 8.213-8.213 0-4.529-3.688-8.213-8.213-8.213zM16 21.307c-2.927 0-5.307-2.38-5.307-5.307s2.38-5.307 5.307-5.307c2.927 0 5.307 2.38 5.307 5.307s-2.38 5.307-5.307 5.307zM24.56 7.505c-1.057 0-1.913 0.857-1.913 1.913s0.857 1.913 1.913 1.913c1.057 0 1.913-0.857 1.913-1.913s-0.857-1.913-1.913-1.913z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M27 0h-22c-2.75 0-5 2.25-5 5v22c0 2.75 2.25 5 5 5h22c2.75 0 5-2.25 5-5v-22c0-2.75-2.25-5-5-5zM10.875 24h-4.125v-13.625h4.125v13.625zM8.875 9.75c-1.312 0-2.375-1.062-2.375-2.375s1.062-2.375 2.375-2.375c1.312 0 2.375 1.062 2.375 2.375s-1.062 2.375-2.375 2.375zM26.875 24h-4.125v-7.125c0-3.375-4.125-3.125-4.125 0v7.125h-4.125v-13.625h4.125v2c1.75-3.25 8.25-3.5 8.25 3.125v8.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-black">
          © 2025 Fatema Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
