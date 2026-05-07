import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8uwg3lb5", // Hata mesajındaki ID bu
  dataset: "production",
  apiVersion: "2023-01-01", // Daha eski ve stabil bir tarih veriyoruz
  useCdn: false,
  token: "skIqRCKZeZqQMrbXR2bDxXXtidQuhQRCh87OLRtohs0ffESXjDJOssRI48aLHwZbHZLg4RjTAN8nKk2UKBNcFtpIMuZuG7gYKi6WpYehCw4ZljEgOsj0ENhbmUf2XQXqZOPjoBpyty3ia4fRrrbsMzUtdLQC8IbZWZxNS3kNqGh6Otku70u3",
});