import Link from 'next/link';

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    };
    return (
        <div style={styles}>
            <Link href="/about">
                <button>About</button>
            </Link>
            <Link href="/contact">
                <button>Contact</button>
            </Link>
        </div>
    )
}

export default Navbar;