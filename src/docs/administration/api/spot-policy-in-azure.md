# Spot Policy in Azure

The latest Spot policy in Azure appears below.

<html>
<script>
        fetch('https://spotinst-public.s3.amazonaws.com/assets/azure/custom_role_file.json')
            .then(res => res.json())
            .then(res => {
                document.querySelector('#hello').textContent = JSON.stringify({permissions: res.properties.permissions}, null, 2)
            })
</script>
<body>
<pre v-pre data-lang="json">
<code id="hello" class="lang-json">hello</code>
</pre>
</body>
</html>
