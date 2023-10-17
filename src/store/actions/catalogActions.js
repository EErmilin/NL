
import axiosCustom from "../../axios/axiosCustom";

const backUrl = "https://testapi.eu-nl.com"


export function getCategories() {
    return async (dispatch) => {

        try {
            await axiosCustom(`${backUrl}/api/v1/categories?sort=id`).then((resp) => {
            });

        } catch (e) {
            if (e.response) {
            }
        }
    };
}
