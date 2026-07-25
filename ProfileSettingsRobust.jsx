import React, { useState } from 'react';

export default function ProfileSettingsRobust() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (formData.username.trim().length < 3) {
            tempErrors.username = "Username must be at least 3 characters long.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address.";
        }
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            tempErrors.password = "Password must be at least 8 characters, with 1 number and 1 special character.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccess(true);
            setFormData({ username: '', email: '', password: '' });
            setErrors({});
        } else {
            setSuccess(false);
        }
    };

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Settings (Round 2 - Accessible)</h2>

            {success && (
                <div role="alert" className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                    <p className="font-bold">Success!</p>
                    <p>Your profile settings have been updated securely.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'
                            }`}
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        aria-invalid={errors.username ? "true" : "false"}
                        aria-describedby={errors.username ? "username-error" : undefined}
                    />
                    {errors.username && (
                        <p id="username-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.username}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'
                            }`}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        aria-invalid={errors.password ? "true" : "false"}
                        aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    {errors.password && (
                        <p id="password-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.password}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}