// =====================================
// CARGAR EL CATÁLOGO XML MEDIANTE XSLT
// =====================================

async function cargarCatalogo() {

    const contenedor = document.getElementById("catalogo-servicios");

    if (!contenedor) {
        return;
    }

    try {

        const respuestaXML = await fetch("xml/datos.xml");
        const respuestaXSL = await fetch("xml/catalogo.xsl");

        if (!respuestaXML.ok || !respuestaXSL.ok) {
            throw new Error("No se pudieron cargar los archivos.");
        }

        const textoXML = await respuestaXML.text();
        const textoXSL = await respuestaXSL.text();

        const parser = new DOMParser();

        const documentoXML = parser.parseFromString(
            textoXML,
            "application/xml"
        );

        const documentoXSL = parser.parseFromString(
            textoXSL,
            "application/xml"
        );

        if (
            documentoXML.querySelector("parsererror") ||
            documentoXSL.querySelector("parsererror")
        ) {
            throw new Error("Hay un error en el formato XML o XSL.");
        }

        const procesador = new XSLTProcessor();

        procesador.importStylesheet(documentoXSL);

        const resultado = procesador.transformToFragment(
            documentoXML,
            document
        );

        contenedor.replaceChildren(resultado);

    } catch (error) {

        console.error("Error al cargar el catálogo:", error);

        contenedor.innerHTML =
            "<p>No se pudo cargar el catálogo. " +
            "Comprueba los archivos XML y XSLT y abre la página con Live Server.</p>";

    }

    document.addEventListener("DOMContentLoaded", function () {
    const largo = document.getElementById("largoUñas");
    const diseno = document.getElementById("disenoUñas");
    const precioTotal = document.getElementById("precioTotal");

    if (!largo || !diseno || !precioTotal) {
        return;
    }

    function calcularPrecio() {
        const precioBase = Number(largo.value);
        const precioDiseno = Number(diseno.value);

        const total = precioBase + precioDiseno;

        precioTotal.textContent =
            "Precio total: RD$" + total.toLocaleString("es-DO");
    }

    largo.addEventListener("change", calcularPrecio);
    diseno.addEventListener("change", calcularPrecio);

    calcularPrecio();
});

}

cargarCatalogo();