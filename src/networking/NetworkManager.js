import { group_id } from "../App";

export function getStageAndManifest() {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/${group_id}/getPosition`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
}

export function updatePosition(direction) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/${group_id}/updatePosition`, {
            method: "POST",
            body: JSON.stringify({
                "direction": direction
            }),
            headers: {"content-type": "application/json"},
        })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
}