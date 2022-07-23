function findUniq(arr) {
    let result = arr[0];

    if (arr[arr.length-1] != arr[arr.length-2] && arr[arr.length-1] != arr[0]) {
        result = arr[arr.length-1];
        return result;
    }

    for (let i = 1; i < arr.length-1; i++) {

        if (i == 0 && arr[i] != arr[arr.length-1]) return result;

        if (arr[i] != arr[i-1] && arr[i] != arr [i+1]) result = arr[i];
    }

    return result;
}