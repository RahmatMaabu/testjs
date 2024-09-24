import axios from 'axios';

export const handleLogin = async (e, username, password, setMessage, router) => {
  e.preventDefault(); 
  if (!username || !password) {
    setMessage("Please enter both username and password.");
    return;
  }

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/login`, {
      username,
      password,
    }, { withCredentials: true });

    if (res.status === 200) {
      router.push('/admin/dashboard'); // Use the passed router
    }
    setMessage(res.data.message); 
  } catch (error) {
    console.error("Login error:", error);
    setMessage("Login failed. Please check your credentials.");
  }
};