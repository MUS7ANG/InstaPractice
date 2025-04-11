import React, {useState, ChangeEvent, useEffect, FormEvent} from 'react';
import { Mail, Lock, Facebook, Moon, Sun } from 'lucide-react';
import '../index.css'

interface FormState {
    username: string;
    password: string;
}

const InstagramLoginPage: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        username: '',
        password: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        window.location.href = '/dashboard';

    };

    const isFormValid: boolean = formData.username.length > 0 && formData.password.length > 5;

    const footerLinks: string[] = [
        'Meta ', 'About ', 'Blog ', 'Jobs ', 'Help ', 'API ', 'Privacy ', 'Terms ',
        'Top Accounts ', 'Locations ', 'Instagram Lite ', 'Threads ',
        'Contact Uploading & Non-Users ', 'Meta Verified '
    ];

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>

            <button
                onClick={toggleDarkMode}
                className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="w-full max-w-md">
                <div className={`border rounded p-8 mb-4 transition-colors duration-200 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="flex justify-center mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="29" viewBox="0 0 594.094 168.536" fill={darkMode ? "#FFFFFF" : "#262626"}><g ><path d="M30.577.586C18.417 5.68 5.049 20.053.827 38.108c-5.347 22.869 16.904 32.54 18.729 29.374 2.148-3.727-3.987-4.987-5.25-16.853-1.632-15.326 5.493-32.451 14.461-39.965 1.667-1.396 1.587.547 1.587 4.141 0 6.428-.355 64.122-.355 76.164 0 16.293-.673 21.438-1.882 26.521-1.225 5.152-3.193 8.633-1.702 9.975 1.667 1.5 8.783-2.068 12.903-7.818 4.94-6.896 6.669-15.178 6.98-24.172.375-10.842.359-28.046.375-37.859.015-9 .151-35.354-.158-51.197C46.44 2.533 35.663-1.544 30.577.586zM591.424 86.18c-1.764 0-2.568 1.818-3.234 4.879-2.311 10.643-4.738 13.045-7.869 13.045-3.498 0-6.642-5.27-7.449-15.818-.635-8.294-.533-23.565.279-38.754.166-3.121-.695-6.209-9.066-9.25-3.602-1.309-8.838-3.234-11.445 3.059-7.365 17.779-10.248 31.895-10.926 37.627-.035.297-.398.357-.463-.336-.432-4.592-1.398-12.938-1.518-30.471-.023-3.421-.748-6.333-4.524-8.717-2.45-1.548-9.89-4.283-12.569-1.028-2.32 2.662-5.009 9.826-7.802 18.318-2.27 6.901-3.851 11.57-3.851 11.57s.029-18.623.057-25.687c.012-2.665-1.816-3.554-2.367-3.714-2.48-.72-7.369-1.923-9.443-1.923-2.561 0-3.188 1.431-3.188 3.516 0 .273-.404 24.519-.404 41.473 0 .736.001 1.54.004 2.394-1.416 7.792-6.008 18.37-11.002 18.37-5 0-7.358-4.422-7.358-24.634 0-11.79.354-16.918.527-25.445.102-4.912.297-8.685.285-9.54-.037-2.625-4.576-3.948-6.688-4.438-2.122-.492-3.966-.684-5.406-.602-2.038.115-3.479 1.452-3.479 3.291 0 .986.011 2.86.011 2.86-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.461-.255-21.416 8.077-4.733 6.621-7.586 14.121-8.709 24.895-.821 7.876-.553 15.864.906 22.619-1.763 7.622-5.036 10.745-8.62 10.745-5.203 0-8.975-8.492-8.537-23.18.289-9.661 2.222-16.44 4.335-26.248.901-4.182.169-6.37-1.667-8.468-1.684-1.925-5.271-2.907-10.43-1.698-3.674.861-8.928 1.789-13.733 2.501 0 0 .29-1.157.528-3.197 1.25-10.698-10.375-9.83-14.084-6.413-2.214 2.04-3.721 4.446-4.293 8.772-.907 6.864 4.691 10.103 4.691 10.103-1.837 8.41-6.34 19.394-10.988 27.336-2.49 4.255-4.396 7.408-6.854 10.76a937.569 937.569 0 0 1-.02-3.738c-.057-17.679.179-31.593.282-36.608.102-4.912.299-8.584.287-9.439-.027-1.92-1.148-2.646-3.48-3.563-2.062-.812-4.5-1.374-7.029-1.57-3.191-.248-5.115 1.444-5.064 3.446.01.378.01 2.699.01 2.699-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.461-.255-21.416 8.077-4.732 6.621-7.831 15.912-8.709 24.812-.818 8.295-.667 15.344.448 21.282-1.203 5.946-4.662 12.164-8.573 12.164-5 0-7.845-4.422-7.845-24.634 0-11.79.354-16.917.527-25.445.102-4.912.297-8.685.285-9.54-.037-2.625-4.576-3.948-6.688-4.438-2.21-.512-4.118-.699-5.583-.591-1.934.144-3.292 1.874-3.292 3.165v2.976c-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.417-.223-21.416 8.077-3.912 5.412-7.079 11.412-8.709 24.694-.471 3.838-.679 7.433-.652 10.792-1.56 9.54-8.449 20.535-14.086 20.535-3.298 0-6.439-6.396-6.439-20.029 0-18.16 1.125-44.015 1.314-46.507 0 0 7.121-.121 8.5-.137 3.553-.039 6.77.045 11.5-.197 2.373-.121 4.659-8.637 2.21-9.691-1.109-.477-8.955-.895-12.064-.961-2.615-.059-9.896-.598-9.896-.598s.653-17.162.806-18.975c.129-1.512-1.826-2.289-2.947-2.762-2.727-1.152-5.165-1.705-8.056-2.301-3.994-.824-5.807-.018-6.16 3.354-.533 5.115-.809 20.101-.809 20.101-2.932 0-12.943-.573-15.875-.573-2.725 0-5.664 11.715-1.898 11.859 4.333.168 11.884.313 16.89.464 0 0-.223 26.282-.223 34.396 0 .863.003 1.694.009 2.501-2.755 14.36-12.46 22.117-12.46 22.117 2.084-9.5-2.173-16.634-9.84-22.673-2.826-2.226-8.402-6.438-14.642-11.055 0 0 3.614-3.562 6.819-10.729 2.271-5.076 2.369-10.885-3.206-12.166-9.209-2.117-16.804 4.646-19.069 11.867-1.755 5.595-.819 9.745 2.619 14.058.251.315.523.636.804.96-2.079 4.007-4.935 9.402-7.354 13.586-6.715 11.616-11.786 20.804-15.62 20.804-3.064 0-3.022-9.328-3.022-18.062 0-7.529.556-18.849 1-30.569.147-3.876-1.792-6.084-5.041-8.084-1.974-1.215-6.187-3.604-8.626-3.604-3.652 0-14.189.497-24.145 29.296-1.255 3.63-3.72 10.244-3.72 10.244l.212-34.632c0-.812-.433-1.598-1.423-2.135-1.678-.91-6.159-2.773-10.143-2.773-1.898 0-2.846.883-2.846 2.643l-.348 54.183c0 4.117.107 8.92.515 11.02.405 2.104 1.062 3.814 1.876 4.832.812 1.016 1.752 1.791 3.302 2.111 1.442.297 9.339 1.311 9.75-1.707.492-3.617.51-7.529 4.657-22.119 6.456-22.715 14.873-33.798 18.831-37.734.691-.688 1.481-.729 1.443.397-.168 4.979-.762 17.424-1.163 27.996-1.072 28.292 4.075 33.536 11.43 33.536 5.627 0 13.559-5.592 22.062-19.744 5.3-8.82 10.447-17.468 14.146-23.701 2.577 2.386 5.468 4.953 8.359 7.696 6.716 6.374 8.921 12.431 7.458 18.177-1.119 4.393-5.333 8.92-12.833 4.52-2.186-1.283-3.12-2.275-5.317-3.723-1.181-.777-2.983-1.01-4.064-.195-2.809 2.117-4.415 4.811-5.332 8.145-.892 3.244 2.357 4.959 5.725 6.459 2.9 1.291 9.133 2.461 13.108 2.594 15.487.518 27.895-7.478 36.531-28.104 1.547 17.813 8.126 27.893 19.559 27.893 7.643 0 15.306-9.879 18.657-19.598.962 3.962 2.386 7.406 4.225 10.32 8.809 13.957 25.898 10.953 34.482-.898 2.653-3.662 3.058-4.979 3.058-4.979 1.252 11.191 10.264 15.102 15.424 15.102 5.779 0 11.746-2.732 15.928-12.147a28.761 28.761 0 0 0 1.609 2.923c8.809 13.957 25.898 10.953 34.482-.898.404-.557.756-1.061 1.062-1.514l.252 7.352-7.902 7.248c-13.247 12.141-23.311 21.35-24.051 32.074-.941 13.674 10.142 18.756 18.539 19.422 8.902.707 16.539-4.215 21.227-11.104 4.125-6.062 6.824-19.111 6.627-32-.079-5.161-.209-11.723-.312-18.757 4.65-5.4 9.89-12.226 14.713-20.214 5.258-8.707 10.892-20.398 13.776-29.497 0 0 4.895.042 10.119-.3 1.671-.109 2.15.231 1.842 1.457-.373 1.479-6.6 25.498-.917 41.498 3.89 10.953 12.659 14.477 17.858 14.477 6.086 0 11.907-4.596 15.027-11.421.376.761.77 1.497 1.198 2.177 8.809 13.957 25.838 10.936 34.482-.898 1.95-2.67 3.058-4.979 3.058-4.979 1.855 11.582 10.862 15.16 16.021 15.16 5.374 0 10.474-2.203 14.611-11.994.173 4.312.445 7.836.875 8.947.262.68 1.789 1.533 2.9 1.945 4.916 1.822 9.93.961 11.785.586 1.285-.26 2.287-1.291 2.424-3.953.359-6.99.139-18.734 2.258-27.463 3.557-14.648 6.875-20.331 8.449-23.143.881-1.576 1.875-1.836 1.911-.168.073 3.375.241 13.286 1.62 26.602 1.012 9.793 2.363 15.582 3.402 17.414 2.965 5.238 6.627 5.486 9.609 5.486 1.896 0 5.864-.523 5.509-3.857-.173-1.625.13-11.668 3.637-26.099 2.29-9.424 6.108-17.938 7.485-21.052.508-1.148.744-.243.736-.067-.29 6.49-.941 27.718 1.703 39.328 3.584 15.729 13.951 17.488 17.564 17.488 7.713 0 14.021-5.867 16.146-21.305.517-3.719-.241-6.588-2.512-6.588zm-323.089-9.544c-.442 8.17-2.036 15-4.594 19.961-4.628 8.979-13.785 11.826-17.822-1.148-2.911-9.355-1.92-22.112-.709-29.002 1.797-10.227 6.297-17.477 13.322-16.79 7.216.706 10.724 9.979 9.803 26.979zm70.501.118c-.412 7.715-2.412 15.465-4.594 19.844-4.504 9.041-13.92 11.867-17.822-1.148-2.668-8.893-2.029-20.402-.709-27.653 1.713-9.41 5.865-18.139 13.322-18.139 7.25-.001 10.825 7.953 9.803 27.096zm1.84 52.635c-.098 14.074-2.312 26.414-7.062 29.998-6.737 5.082-15.792 1.27-13.917-9 1.659-9.088 9.505-18.369 20.999-29.709-.001 0 .023 2.586-.02 8.711zm121.702-52.553c-.392 8.47-2.267 15.091-4.594 19.761-4.505 9.041-13.854 11.848-17.822-1.148-2.163-7.084-2.264-18.916-.709-28.802 1.583-10.07 6.003-17.677 13.322-16.99 7.219.677 10.598 9.979 9.803 27.179z"/></g></svg>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <div className={`absolute inset-y-0 left-3 flex items-center pointer-events-none ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <Mail size={16} />
                            </div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Phone number, username, or email"
                                className={`w-full py-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-1 transition-colors duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-400 focus:border-blue-400'
                                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                                value={formData.username}
                                onChange={handleInputChange}
                                aria-label="Username or email"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                                <Lock size={16} />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`w-full py-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-1 transition-colors duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-400 focus:border-blue-400'
                                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                                value={formData.password}
                                onChange={handleInputChange}
                                aria-label="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-2 rounded font-medium transition-colors duration-200 relative ${
                                isFormValid
                                    ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600'
                                    : 'bg-blue-300 text-white cursor-not-allowed'
                            }`}
                            disabled={!isFormValid}
                            aria-label="Log in"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <div className={`flex-grow border-t transition-colors duration-200 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
                        <span className={`mx-4 text-sm font-semibold transition-colors duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>OR</span>
                        <div className={`flex-grow border-t transition-colors duration-200 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
                    </div>

                    {/* Facebook Login */}
                    <button
                        className={`w-full flex items-center justify-center font-semibold my-4 transition-colors duration-200 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}
                        aria-label="Log in with Facebook"
                    >
                        <Facebook size={18} className="mr-2" />
                        Log in with Facebook
                    </button>

                    {/* Forgot Password */}
                    <div className={`text-xs transition-colors duration-200 ${darkMode ? 'text-blue-300' : 'text-blue-900'} flex justify-center mb-8`}>
                        <a href="#" className="text-xs text-blue-900 justify-center gap-3 mb-4">
                            Forgot password?
                        </a>
                    </div>
                </div>

                {/* Sign Up Box */}
                <div className={`border rounded p-4 text-center transition-colors duration-200 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-500 font-semibold">
                            Sign up
                        </a>
                    </p>
                </div>


                {/* Footer */}
                <div className="mt-8 text-center">
                    <div className={`text-xs transition-colors duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {footerLinks.map((link: string) => (
                            <a key={link} href="#" className="text-xs text-gray-500">
                                {link}
                            </a>
                        ))}
                    </div>
                    <p className={`text-xs transition-colors duration-200 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>© 2025 Instagram from Meta</p>
                </div>
            </div>
        </div>
    );
};

export default InstagramLoginPage;