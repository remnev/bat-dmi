const Metrica = () => ([
    <script
        key="script"
        dangerouslySetInnerHTML={{
            __html: `(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter51425440 = new Ya.Metrika2({ id:51425440, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2");`
        }}
    />,
    <noscript
        key="noscript"
        dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/51425440" style="position:absolute; left:-9999px;" alt="" /></div>`
        }}
    />
]);

export default Metrica;
