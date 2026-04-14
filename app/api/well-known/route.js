export async function GET() {
  const aasaData = {
    applinks: {
      details: [
        {
          appIDs: ["TX359BWH8H.com.creativetechnology.Shoot"],
          components: [
            {
              "/": "/tiktok-share",
              "comment": "TikTok share redirect"
            }
          ]
        }
      ]
    }
  };

  return new Response(JSON.stringify(aasaData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=604800'
    }
  });
}
