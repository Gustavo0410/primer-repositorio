public class punto5 {
    public static void main(String[] args) {

        int myArry[] = new int[]{1,2,1,3,3,1,2,1,5,1}; 
        int n = myArry.length; 

        boolean visited[] = new boolean[n]; 

        for (int i = 1; i <= 5; i++) { 
           
            int count = 0;

            
            for (int f = 0; f < n; f++) {
                
                if (visited[f] == true)
                    continue;

                
                if (myArry[f] == i) {
                    visited[f] = true; 
                    count++;
                } 
            } 

            
            System.out.print(i + ": " );
            for (int g = 0; g < count; g++) { 
                System.out.print('*');
            }
            System.out.println();
        }
    }
}
