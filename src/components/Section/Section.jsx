import css from '../Section/Section.module.css'


export const Section = ({ title, children }) => {
    return (
        <section className= {title ? css.superSection : css.base__section}>
            {title && <h2 className ={css.title}>{title}</h2>}
            {children}
        </section>
    )
}