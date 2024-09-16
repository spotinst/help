# Spot Policy in Azure (AKS)

This is the latest Spot policy in Azure:

<html>
    <script>
        fetch('https://spotinst-public.s3.amazonaws.com/assets/azure/spotinst_azure_aks.json')
            .then(res => res.json())
            .then(res => {
                document.querySelector('#json-content').textContent = JSON.stringify({properties:[{actions: res.properties}]}, null, 2);
            })
            .then(() => window.Prism.highlightAll())
    </script>
    <body>
        <pre v-pre data-lang="json">
            <code id="json-content" class="lang-json">Loading...</code>
        </pre>
    </body>
</html>
