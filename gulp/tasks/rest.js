import del from "del";
export const reset = () => {
    return del(app.path.clean);
};
export const resetImgBuild = () => {
    return del(app.path.build.img);
};
