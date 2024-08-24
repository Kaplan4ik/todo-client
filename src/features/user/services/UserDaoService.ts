import axios from 'config/axiosConfig';

async function createUser(userId: string): Promise<void> {
  const route = `user`;
  await axios.post(route, { userId });
}

export const UserDaoService = {
  createUser,
};
