
import axios from "axios";

export function getChannel() {
    return async (dispatch) => {

        try {
            axios.get("http://148.251.20.4:5555/api/v1/channels?sort=id").then((resp) => {
                console.log(resp)
              });

        } catch (e) {
            if (e.response) {
            }
        }
    };
}
