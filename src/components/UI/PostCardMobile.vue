<template>
    <div class="relative flex flex-col justify-between   bg-white shadow-md rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded-lg shadow-md h-56 w-auto my-2"
					:style="
          img[0]?
          `background-image:url('http://0.0.0.0:6950/resources/static/assets/uploads/post/${img[0].name}')`
          :'https://montessori-neokids.fr/wp-content/themes/neokids/assets/img/post_default.jpg'

          ">
					<div class="absolute bg-gradient-to-t from-green-400 to-blue-400  opacity-50 inset-0 z-0"></div>
					<div class="relative flex flex-row items-end  h-72 w-full ">
						<div class="absolute right-0 top-0 m-2">
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 "
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
							</svg>
						</div>
						<div class="p-6 rounded-lg  flex flex-col w-full z-10 ">
							<h4 class="mt-1 text-white text-xl font-semibold  leading-tight truncate">{{title}}
							</h4>
							<div class="flex justify-between items-center ">
								<div class="flex flex-col">
									<h2 class="text-sm flex items-center text-gray-300 font-normal">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none"
											viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
											</path>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										{{description}}
									</h2>
								</div>
							</div>
							<div class=" pt-4  text-sm text-gray-300">
								<div class="flex items-center font-medium text-white ">
									Latitude
									<span class="text-gray-300 text-sm font-normal"> {{lat}}</span>
								</div>
                <div class="flex items-center font-medium text-white ">
									Longitude
									<span class="text-gray-300 text-sm font-normal"> {{long}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

</template>

<script>
export default {
  name: 'PostCardMobile',
  props: {
    title: {
      type: String,
      required: true,
      default:'azrazeraze'
    },
    id:{
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: '@/image-path/image-name.jpg',
    },
    description: {
      type: String,
      default: 'Lorem Ipsum',
    },
    lat: {
      type: Number
    },
    long:{
      type: Number
    },
    tags: {
      type: Object,
    }
  },
  components:{
  },
  data(){
  },
  mounted(){
  },
  methods:{
  }
}

</script>
