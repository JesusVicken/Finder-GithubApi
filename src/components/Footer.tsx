import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Site desenvolvido por Jesus Vicken.</p>
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;
