import About from './sections/about'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Introduction from './sections/introduction'
import Works from './sections/works'


export function Portfolio() {
    return (
        <div>
            <Introduction />
            <About />
            <Experience />
            <Works />
            <Contact />
        </div>
    )
}
