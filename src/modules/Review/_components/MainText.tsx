import EmbeddedVideoPlayer from "./EmbeddedVideoPlayer";

const MainText = ({ data }: { data: any }) => {
  const htmlText = data?.post?.data?.attributes?.main_text;
  const scriptSrcRegex = /<script[\s\S]*?src="([^"]+)">/g;
  const scriptTagRegex = /<script(.*)<\/script>/g;
  const scriptSrcMatch = scriptSrcRegex.exec(htmlText);
  const restHtmlText = String(htmlText).replaceAll(scriptTagRegex, '')
  const scriptSrcContent = scriptSrcMatch?.[1] ?? ''

  return (<>
    <div
      id="articleMainText"
      className="mt-4"
      style={{
        fontFamily: "IRANSans",
      }}
      dangerouslySetInnerHTML={{
        __html:
          restHtmlText.replaceAll(
            "<a ",
            '<a target="_blank" rel="noopenner" '
          ) ?? "",
      }}
    ></div>
    {!!scriptSrcContent && <EmbeddedVideoPlayer src={scriptSrcContent} />}
  </>
  )
}

export default MainText
