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

export function skipToIndex(index) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/${group_id}/updateIndex`, {
            method: "POST",
            body: JSON.stringify({
                "index": index
            }),
            headers: {"content-type": "application/json"},
        })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
}

export function updateToNewIndex(index, populateScreen) {
    return new Promise((resolve, reject) => {
        if (index.includes("+")) {
            updatePosition(parseInt(index)).then(() => populateScreen());
        }else if (index.includes("-")) {
            updatePosition(index).then(() => populateScreen());
        }else {
            skipToIndex(index).then(() => populateScreen());
        }
    })
}

export function getValueForKey(key) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/${group_id}/getValue`, {
            method: "POST",
            body: JSON.stringify({
                "key": key
            }),
            headers: {"content-type": "application/json"},
        })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
}

export function submitValue(value, key, completion) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/${group_id}/submitValue`, {
            method: "POST",
            body: JSON.stringify({
                "value": value, 
                "key": key
            }),
            headers: {"content-type": "application/json"},
        })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
}