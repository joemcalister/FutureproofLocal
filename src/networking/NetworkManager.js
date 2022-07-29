
export function getStageAndManifest(group_id) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/${group_id}/getPosition`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
}