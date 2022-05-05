<template>

  <div class="m-4">
    <label class="inline-block mb-2 text-gray-500">File Upload</label>
    <div class="flex items-center justify-center w-full">
      <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
          <div class="flex flex-col items-center justify-center pt-7">
            <form
            class="mt-7"
            enctype="multipart/form-data"
            method="POST"
            @submit="submitImage"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
              <input type="file" hidden class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600" name="myImage" accept="image/*" @change="this.onFilePicked"/>
            </form>
            <p class="" v-if="this.submittedImageName">{{this.submittedImageName}}</p>
            <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl" @click="submitImage">Send Photo</button>
            <p style="color:red" v-if="this.message !=null">{{this.message}}</p>
          </div>
      </label>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'UploadImageForm',
  data(){
    return{
      message:null,
      submittedImageName:null
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components:{


  },
  methods:{
    onFilePicked (event) {
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
        this.submittedImageName
      })
      fileReader.readAsDataURL(files[0])
      this.submittedImageName = files[0].name
      this.image = files[0]
    },
    async submitImage(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('file',this.image);
      await axios.post(`http://localhost:6950/upload/post/${this.id}/image/add/`,formData)
      .then(res => {
        this.message = res.data;
        this.submittedImageName = null
        this.$emit('updatedImageList')
      }

      )
      .catch(err => this.message = err.data)
    }
  }
}
</script>
