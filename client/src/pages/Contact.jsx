import { useState } from "react";

const  Contact = () => {
    const[formData, setFormData] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState("");

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if(data.success) {
            setStatus("Message Sent");
            setFormData({ name: "", email: "", message: ""});
        }else{
            setStatus("Failed to send message");
        }
    };

    return(
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-12">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded bg-gray-900 text-white border border-gray-600 focus:border-teal-400 outline-none"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded bg-gray-900 text-white border border-gray-600 focus:border-teal-400 outline-none"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded bg-gray-900 text-white border border-gray-600 focus:border-teal-400 outline-none"></textarea>
                </div>
                <button
                type="submit"
                className="w-full bg-teal-500 text-black font-semibold px-4 py-2 rounded hover:bg-teal-400 transition">Send Message</button>
                <p className="mt-3 text-center">{status}</p>
            </form>

        </div>
    )
};

export default Contact;