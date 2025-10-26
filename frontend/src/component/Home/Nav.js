function Nav(){
    return(
        <nav data-depth="1" className="breadcrumb hidden-sm-down">
            <ol itemScope itemType="http://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a itemProp="item" href="https://demo1.leotheme.com/bos_soucer_demo/en/">
            <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1"/>
            </li>
            </ol>
        </nav>
    )
}
export default Nav