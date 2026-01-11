import Sqids from "sqids";

const sqids = new Sqids({
    minLength: 4,
})

export function getSqids(){
    return sqids;
}
