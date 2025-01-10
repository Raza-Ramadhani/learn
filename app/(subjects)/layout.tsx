import Nav from "../ui/nav"

export default function SubjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            <Nav/>
            <div>{children}</div>
        </div>
    )
}