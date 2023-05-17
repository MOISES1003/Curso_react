const API = "https://api.themoviedb.org/3"
export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjcxNGRlZjY1NTFjYzYyM2U2M2I1MTkwMzMxYTFhMCIsInN1YiI6IjY0NGI0MmQwNTFhNjRlMDhmY2RkMWE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cC8qDLEHA6WGDKaFdiIoMDbZTO1aBjcaM_bpy9jo8Uc",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json());
}