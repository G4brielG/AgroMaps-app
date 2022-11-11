const animate = (value) => {

    const items = {
        x: value * 100,
        opacity: value ? 1 : 0.2,
        scale: value ? 1 : 0.5
    }

    return (items)
}

const transition = {
    default: {
        type: "spring",
        damping: 20,
        stiffness: 300,
    },
    x: {
        type: "spring",
        damping: 20,
        stiffness: 1000
    },
    opacity: {
        type: "tween",
        duration: 300
    }
}

export {
    animate,
    transition
}