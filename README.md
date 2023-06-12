## Research Database

### This is Next.js project that uses Typescript, Material UI, Material React Table and Fuse.js for fuzzy search functionalites.
#### Database (database.json) was put together with Node.js using pdfParse and express-fileupload:
```
server.post("/extract-text", (req, res) => {
      // if no req file and no pdfFile
      if (!req.files && !req.files.pdfFile) {
        req.status(400);
        req.end();
      }

      pdfParse(req.files.pdfFile).then((result) => {
        res.send(result.text);
      });
    });

  fetch("/extract-text", {
      method: "post",
      body: formData,
    })
      .then((res) => {
        return res.text();
      })
      .then((extractedText) => {
        let newObj = {
          id: uuidv4(),
          name: inpFile?.current?.files[0].name,
          type: inpFile?.current?.files[0].type,
          text: extractedText,
        };
        console.log(newObj);
      });
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
