import { useState } from 'react';

export default function ContactP () {
    const [formData, setFormData] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        setFormData([
          ...formData,
          { email, username, name, message },
        ]);
    
        // Reset input fields setelah submit
        setEmail('');
        setUsername('');
        setName('');
        setMessage('');
      };

    return (
        <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-6xl font-bold">Contact Us <br/>Get in Touch!</h1>
                    <p className="py-6">Have questions or want to learn more about Libera? We are here to help. Whether you are curious about our initiatives, looking to collaborate, or simply want to join our vibrant community, reach out to us. Lets connect and make a difference together!</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>

                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                        <textarea
                            placeholder="What can we help you?"
                            className="textarea textarea-bordered textarea-md w-full max-w-xs"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='mx-10'>
            <table className="table mx-10">
                <thead className="font-semibold text-lg">
                    <tr>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                {formData.map((data, index) => (
                    <tr key={index}>
                    <td>{data.email}</td>
                    <td>{data.username}</td>
                    <td>{data.name}</td>
                    <td>{data.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>

    )
}