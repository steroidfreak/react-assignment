import React, { useState } from 'react';

export default function Newsletter() {
    const [formData, setFormData] = useState({
        name: '',
        salutation: '',
        email: ''
    });
    const [demoResponse, setDemoResponse] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your subscription logic here
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2 className="card-title text-center mb-4 text-primary">Subscribe to Our Newsletter</h2>

                        <div className="mb-3">
                            <label htmlFor="salutation" className="form-label">
                                Salutation
                            </label>
                            <select
                                id="salutation"
                                name="salutation"
                                value={formData.salutation}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select...</option>
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Ms">Ms.</option>
                                <option value="Dr">Dr.</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 mb-3"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
