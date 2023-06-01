function getCard(block){
    var content = `<div class="mt-12 drop-shadow-xl w-full h-[19.125rem] py-6 px-6 rounded-[20px] bg-white">
                        <div class="inline-flex">
                            <div class="mr-6 font-bold text-[1.625rem] text-[#323B4B]">${block.title}</div>
                            <div class="m-auto">`
                            content += getLabel(block.label[0]);
                content += `</div>
                        </div>
                        <div class="mt-6 text-lg leading-7 text-[#323B4B]">${block.description}</div>
                        <div class="flex flex-wrap mt-6">`
            block.list.map(function(item, index){
                content += `<div class="inline-flex w-1/2 mt-[0.6875rem]">
                                <img class="w-[14px] h-[11px] mt-[0.625rem] mr-[0.6rem]" src="${block.list_indicator.filename}" alt="${block.list_indicator.alt}">
                                <div class="text-[1rem] leading-7 text-[#323B4B]">${item.text.content[0].content[0].text}</div>
                            </div>`
            })
            if(block.detail_url) content += `<a href="${block.detail_url.url}" class="absolute bottom-[1.875rem] right-[1.875rem] font-semibold text-[0.9375rem] text-[#5B7FFF] hover:underline">See details</a>`            
            content += `</div>`;    
        content += `</div>`;
    return content;
}