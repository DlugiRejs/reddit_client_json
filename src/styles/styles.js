export function appStyles(hobby) {
    switch (hobby) {
        case "golf":
            return {
                backgroundColor: "#AAE1CD"
            };
        case "tennis":
            return {
                backgroundColor: "#FED58E"
            };
        case "Equestrian":
            return {
                backgroundColor: "#E3B3FE"
            };
        case "sports":
        default:
            return {
                backgroundColor: "white"
            };
    }
}

export function headerStyles(hobby) {
    switch (hobby) {
        case "golf":
            return {
                backgroundColor: "#44A481",
                color: "#560090"
            };
        case "tennis":
            return {
                backgroundColor: "#E8A125",
                color: "#560090"
            };
        case "Equestrian":
            return {
                backgroundColor: "#9903EE",
                color: "#FFD791"
            };
        case "sports":
        default:
            return {
                backgroundColor: "#7B718E",
                color: "white"
            };
    }
}

export function searchTermStyles(hobby) {
    switch (hobby) {
        case "golf":
            return {
                borderColor: "#9C18E7",
                color: "#9C18E7"
            };
        case "tennis":
            return {
                borderColor: "#9C18E7",
                color: "#9C18E7"
            };
        case "Equestrian":
            return {
                borderColor: "#E8A125",
                color: "#E8A125"
            };
        case "sports":
        default:
            return {
                borderColor: "#B9B4C3",
                color: "#7B718E"
            };
    }
}

export function postStyles(hobby) {
    switch (hobby) {
        case "golf":
            return {
                borderColor: "#9C18E7",
                color: "#E8A125"
            };
        case "tennis":
            return {
                borderColor: "#9C18E7",
                color: "#44A481"
            };
        case "Equestrian":
            return {
                borderColor: "#9C18E7",
                color: "#44A481"
            };
        case "sports":
        default:
            return {
                borderColor: "#7B718E",
                color: "#7B718E"
            };
    }
}

export function toTopButtonStyles(hobby) {
    switch (hobby) {
        case "golf":
            return {
                color: "#FFA508",
                backgroundColor: "#FFFFFF",
                borderColor: "#9C18E7"
            };
        case "tennis":
        case "Equestrian":
            return {
                color: "#2BBD88",
                backgroundColor: "#FFFFFF",
                borderColor: "#9C18E7"
            };
        case "sports":
        default:
            return {
                color: "#7B718E",
                backgroundColor: "#FFFFFF",
                borderColor: "#7B718E"
            };
    }
}
