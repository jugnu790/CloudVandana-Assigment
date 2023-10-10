



/*Check if the input is pangram or not. (A pangram is a sentence that contains all the 
alphabets from A to Z) */
import java.util.*;

public class panagram{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(checkPangram(str));
        sc.close();
    }

    public static boolean checkPangram(String str) {
        boolean[] mark = new boolean[26];
        int index = 0;
        for (int i = 0; i < str.length(); i++) {
            if ('A' <= str.charAt(i) && str.charAt(i) <= 'Z') {
                index = str.charAt(i) - 'A';
            } else if ('a' <= str.charAt(i) && str.charAt(i) <= 'z') {
                index = str.charAt(i) - 'a';
            }
            mark[index] = true;
        }
        for (int i = 0; i < mark.length; i++) {
            if (mark[i] == false) {
                return false;
            }
        }
        return true;
    }
}

