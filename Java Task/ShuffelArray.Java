

/*This code Show shuffel of array every single time if we run program it generate new shuffel array*/

 import java.util.*;

 public class ShuffelArray{

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        shuffle(arr);
        System.out.println(Arrays.toString(arr));
    }
    public static void shuffle(int[] arr) {
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            int j = rand.nextInt(arr.length);
            swap(arr, i, j);
        }
    }
    public static void swap(int[] arr, int i, int j) {
        if (i == j) return;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
 