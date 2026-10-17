import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Mentions légales",
  description: `Mentions légales, informations sur l'éditeur, l'hébergeur et le traitement des données personnelles du site ${site.name}.`,
  path: "/mentions-legales",
});

const credits = [...new Set(Object.values(photos).map((p) => p.credit))];

export default function LegalPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Mentions légales", path: "/mentions-legales" }]} title="Mentions légales" />
      <article className="container-site max-w-3xl py-16 md:py-20 [&_h2]:mt-12 [&_h2]:text-2xl [&_p]:mt-4 [&_p]:text-foreground/85 [&_ul]:mt-4 [&_ul]:space-y-1 [&_ul]:text-foreground/85">
        <h2 className="!mt-0">Éditeur du site</h2>
        <ul>
          <li>
            <strong>{site.legal.owner}</strong>, {site.legal.form}, exerçant sous le nom commercial «&nbsp;
            {site.legal.tradeName}&nbsp;»
          </li>
          <li>Adresse : {fullAddress}</li>
          <li>SIREN : {site.legal.siren} – SIRET : {site.legal.siret}</li>
          <li>Immatriculation au Registre national des entreprises (RNE)</li>
          <li>N° TVA intracommunautaire : {site.legal.vat}</li>
          <li>Code NAF : {site.legal.naf}</li>
          <li>
            Téléphone : {site.phone} – E-mail : <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
          </li>
          <li>Directeur de la publication : {site.legal.owner}</li>
          {site.legal.insurance && <li>Assurance professionnelle : {site.legal.insurance}</li>}
        </ul>

        <h2>Hébergement</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis –{" "}
          <a href="https://vercel.com" className="underline" rel="noopener">
            vercel.com
          </a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, le logo et la charte graphique de ce site sont la propriété de {site.legal.owner}. Toute
          reproduction sans autorisation est interdite. Photographies d'illustration sous licence Unsplash :{" "}
          {credits.join(", ")}.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations transmises via le formulaire de contact (nom, téléphone, e-mail, commune, message) sont
          utilisées uniquement pour répondre à votre demande et établir un devis. Elles ne sont ni vendues ni cédées à
          des tiers et sont conservées au maximum 3 ans après le dernier contact.
        </p>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de
          limitation du traitement de vos données. Pour l'exercer, écrivez à{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          . Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site n'utilise pas de cookies publicitaires ni de traceurs soumis à consentement. La carte affichée sur la
          page des zones d'intervention est fournie par OpenStreetMap.
        </p>
      </article>
    </>
  );
}
