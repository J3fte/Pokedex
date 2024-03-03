import { ref } from 'vue'

interface Cards {
  stars: number
}

export default function useCards(): Cards {
  const stars = ref<number>(4)
  return {
    stars,
  }
}
