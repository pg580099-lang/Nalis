<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">

        <div class="servicios-grid">

            <xsl:for-each select="catalogo/servicio">

                <article class="tarjeta">

                    <img>
                        <xsl:attribute name="src">
                            <xsl:text>images/</xsl:text>
                            <xsl:value-of select="imagen"/>
                        </xsl:attribute>

                        <xsl:attribute name="alt">
                            <xsl:value-of select="nombre"/>
                        </xsl:attribute>
                    </img>

                    <div class="tarjeta-contenido">

                        <h2>
                            <xsl:value-of select="nombre"/>
                        </h2>

                        <p>
                            Código:
                            <xsl:value-of select="codigo"/>
                        </p>

                        <p>
                            Categoría:
                            <xsl:value-of select="categoria"/>
                        </p>

                        <p>
                            <xsl:value-of select="descripcion"/>
                        </p>

                        <p class="precio">
                            RD$
                            <xsl:value-of select="precio"/>
                        </p>

                        <a href="contact.html" class="boton">
                            Solicitar información
                        </a>

                    </div>

                </article>

            </xsl:for-each>

        </div>

    </xsl:template>

</xsl:stylesheet>