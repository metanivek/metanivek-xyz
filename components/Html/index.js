export default function Html({ item }) {
  const viewer_id = undefined;
  // TODO viewer id
  // TODO centralize gateway stuff
  const gateway = "https://metanivek.mypinata.cloud/ipfs/";
  const uri = item.artifact_uri.replace("ipfs://", gateway);
  return (
    <iframe
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        border: "none",
      }}
      title={`html-embed for ${item.title}`}
      src={`${uri}/?creator=${item.creator_id}&viewer=${viewer_id}&objkt=${item.id}`}
      sandbox="allow-scripts allow-same-origin"
      allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking;"
    />
  );
}
