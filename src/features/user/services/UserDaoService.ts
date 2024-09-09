import axios from 'config/axiosConfig';

async function currentUser(token: string): Promise<void> {
  const route = `user`;
  await axios.get(route, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const UserDaoService = {
  currentUser,
};
