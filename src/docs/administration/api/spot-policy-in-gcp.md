# Spot Policy in GCP

You can find and modify your Spot Policy in the [GCP IAM Console](https://console.cloud.google.com/iamadmin/).

## Latest Spot Policy in GCP

<html>
    <script>
        fetch('https://spotinst-public.s3.amazonaws.com/assets/gcp/spot_policy_in_gcp.json')
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
