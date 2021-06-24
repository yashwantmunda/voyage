import Head  from 'next/head';


export default function Layout({children}) {
    return (
       <>
            <Head>
                 {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=739656360`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '739656360', {
                    page_path: window.location.pathname,
                    });
                `,
                    }}
                />
            </Head>
            { children }
       
           
       </>
    )
}
