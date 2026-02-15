# Script to add noindex meta tag to all markdown files in src/docs

$docsPath = "c:\repos-spot\help\src\docs"
$metaTag = '<meta name="robots" content="noindex">'

# Get all .md files recursively
$mdFiles = Get-ChildItem -Path $docsPath -Filter "*.md" -Recurse

$updatedCount = 0
$skippedCount = 0
$errorCount = 0

Write-Host "Found $($mdFiles.Count) markdown files to process..."

foreach ($file in $mdFiles) {
    try {
        # Read the file content
        $content = Get-Content -Path $file.FullName -Raw -ErrorAction Stop
        
        # Check if the file already has the noindex tag
        if ($content -match '<meta\s+name="robots"\s+content="noindex"') {
            Write-Host "Skipping (already has noindex): $($file.FullName)"
            $skippedCount++
            continue
        }
        
        # Add the meta tag at the beginning of the file
        $newContent = $metaTag + "`r`n`r`n" + $content
        
        # Write the updated content back to the file
        Set-Content -Path $file.FullName -Value $newContent -NoNewline -ErrorAction Stop
        
        Write-Host "Updated: $($file.FullName)"
        $updatedCount++
    }
    catch {
        Write-Host "ERROR processing $($file.FullName): $_" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host "`n========== Summary =========="
Write-Host "Total files: $($mdFiles.Count)"
Write-Host "Updated: $updatedCount"
Write-Host "Skipped (already had noindex): $skippedCount"
Write-Host "Errors: $errorCount"
