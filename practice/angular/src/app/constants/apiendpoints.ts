import { environment } from "../env/environment";

const path = environment.base_url;
export const endpoints = {
    LOGIN : `${path}/login`,
    SIGNUP : `${path}/signup`
}
