/**
 * Categorizes file size into human-readable buckets for analytics.
 * @param sizeInBytes - File size in bytes
 * @returns A string representing the size bucket
 */
export function getFileSizeBucket(sizeInBytes: number): string {
  const KB = 1024;
  const MB = 1024 * KB;

  if (sizeInBytes < 100 * KB) {
    return "<100KB";
  }
  if (sizeInBytes < 500 * KB) {
    return "100KB-500KB";
  }
  if (sizeInBytes < 1 * MB) {
    return "500KB-1MB";
  }
  if (sizeInBytes < 5 * MB) {
    return "1MB-5MB";
  }
  if (sizeInBytes < 10 * MB) {
    return "5MB-10MB";
  }
  return ">10MB";
}
