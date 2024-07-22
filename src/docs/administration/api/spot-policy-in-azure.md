<html>
<script>
        fetch('https://spotinst-public.s3.amazonaws.com/assets/azure/custom_role_file.json')
            .then(res => res.json())
            .then(res => {
                document.querySelector('#spot-azure-permissions').textContent = JSON.stringify(
                    {
                        properties:[
                            {
                               actions: res.properties
                          }
                        ]
                    }
                , null, 2)
            })
            .then(() => window.Prism.highlightAll())
</script>
<body>
<pre v-pre data-lang="json">
<code id="spot-azure-permissions" class="lang-json">Loading...</code>
</pre>
</body>
</html>
