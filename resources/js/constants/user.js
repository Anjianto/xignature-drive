import { FIND_USER } from "./api";

export const findUser = async ({email}) => {
    try {
        const { data } = await axios.get(FIND_USER, {
            params: {
                email,
            },
        });

        return { data, error: false };
    } catch (error) {
        return { data: null, error };
    }
}