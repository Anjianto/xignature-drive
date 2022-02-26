import axios from "axios";
import { FIND_FILE } from "../constants/api";
import { joinUrlPath } from "../utils";

export const findFile = async (base, {fileId, hash}) => {
    try {
        const { data } = await axios.get(joinUrlPath(base, FIND_FILE), {
            params: {
                fileId,
                hash,
            },
        });
        return { data, error: false };
    } catch (error) {
        return { data: null, error: error.response };
    }
}